import {
  LoggerService,
  PrismaService,
} from '@formation/servers-lib/dist/services';
import { convertDbPartenaireToCodeLabelResultDto } from '@formation/servers-lib/dist/utils/prisma-dto-converters';
import {
  CodeLabelResultDto,
  OffreReferenceResultDto,
  WorkDone,
  ProductDto,
  IPaginatedListDto,
  ISearchDto,
} from '@formation/shared-lib';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RefsService {
  constructor(
    private readonly logger: LoggerService,
    private readonly prismaService: PrismaService,
  ) {
    this.logger.info('RefsService created');
  }

  async getAllFichParts(): Promise<WorkDone<CodeLabelResultDto[]>> {
    const dbPartenaires = await this.prismaService.partenaire.findMany({
      orderBy: {
        code: 'asc',
      },
    });

    if (!dbPartenaires) {
      return WorkDone.buildError(
        'Une erreur est survenue durant la récupération des partenaires.',
      );
    }
    return WorkDone.buildOk<CodeLabelResultDto[]>(
      dbPartenaires.map(convertDbPartenaireToCodeLabelResultDto),
    );
  }

  /// ::: added with fred ::: ///

  async getProduits(): Promise<WorkDone<ProductDto[]>> {
    // we put a small filter here just to not have all the products being
    // rendered
    const filter = 'lait';
    const dbProducts = await this.prismaService.produit.findMany({
      where: {
        libelle: {
          contains: filter,
          mode: 'insensitive',
        },
      },
      orderBy: {
        libelle: 'asc',
      },
    });

    if (!dbProducts) {
      return WorkDone.buildError(
        'une erreur est survenue durant la recup des produicts',
      );
    }
    return WorkDone.buildOk(dbProducts);
  }

  /// Find a product using it's code number
  // The function, called in the controller when a GET request is received
  // from /api/refs/produits/#code, will retrieve #code thanks to @param decorator

  // All the prisma functions are
  async getOneProduct(productCode: string): Promise<WorkDone<ProductDto>> {
    const product = await this.prismaService.produit.findUnique({
      where: {
        code: productCode,
      },
    });

    if (!product) {
      return WorkDone.buildError('ce code ne correspond à aucun produit');
    }
    /// Console.log
    this.logger.info(product);
    return WorkDone.buildOk(product);
  }

  async createProduct(product : ProductDto) : Promise<WorkDone<string>> {
    
    /// Check if product with same code already exists

    const itExists = await this.getOneProduct(product.code)

    if (itExists){
      return WorkDone.buildError("product with same code existing") 
    }

    try {
      await this.prismaService.produit.create({
        data : product
      })
  
      return WorkDone.buildOk(`added ${product.code}`)
    }

    catch (e){
      return WorkDone.buildError(JSON.stringify(e))
    }

  }

  async updateProduct(productCode : string, product : ProductDto) : Promise<WorkDone<string>> {
    try {
      
      if (!(await this.getOneProduct(productCode)).isOk){
        return WorkDone.buildError("this product doesn't exist")
      }
      
      const update = await this.prismaService.produit.update({
        where : {
          code : productCode
        },
        data : {
          libelle : product.libelle
        }
      })
      if (!update){
        return WorkDone.buildError("no product updated")
      }
      return WorkDone.buildOk("product updated")
    }
    /// The issue with this catch is that we make 2 requests above
    // then we don't know for sure what error we are catching
    catch (e){
      this.logger.info(e)
    }
  }

  async searchOffreReference(
    codeCampagne: number,
    codeOffre?: string,
    codeProduit?: string,
  ): Promise<WorkDone<OffreReferenceResultDto[]>> {
    return WorkDone.buildOk([
      {
        codeCampagne: 202201,
        codeOffre: 'OF01',
        libelleOffre: 'Offre #01',
        codeProduit: 'PR01',
        dateDerniereModification: new Date(),
      },
      {
        codeCampagne: 202201,
        codeOffre: 'OF01',
        libelleOffre: 'Offre #01',
        codeProduit: 'PR02',
        dateDerniereModification: new Date(),
      },
      {
        codeCampagne: 202201,
        codeOffre: 'OF02',
        libelleOffre: 'Offre #02',
        codeProduit: 'PR07',
        dateDerniereModification: new Date(),
      },
    ]);
    // return this.oracleDbService.executeQuery<OffreReferenceResultDto>(
    //   `SELECT CD_CAMP, CD_OFFRREFE, LB_OFFRREFE, CD_PROD, DT_MODI
    //    FROM ADLMASTER_OWNER.OFFRE_REFERENCE
    //    WHERE CD_CAMP = :codeCampagne
    //      AND (:hasCodeOffre = 0 OR CD_OFFRREFE = :codeOffre)
    //      AND (:hasCodeProduit = 0 OR CD_PROD = :codeProduit)
    //    ORDER BY CD_CAMP, CD_OFFRREFE, CD_PROD`,
    //   {
    //     queryBindings: {
    //       codeCampagne: { dir: ORACLE_BIND_IN, type: DB_TYPE_NUMBER, val: codeCampagne },
    //       hasCodeOffre: { dir: ORACLE_BIND_IN, type: DB_TYPE_NUMBER, val: !!codeOffre ? 1 : 0 },
    //       codeOffre: { dir: ORACLE_BIND_IN, type: DB_TYPE_VARCHAR, val: codeOffre },
    //       hasCodeProduit: { dir: ORACLE_BIND_IN, type: DB_TYPE_NUMBER, val: !!codeProduit ? 1 : 0 },
    //       codeProduit: { dir: ORACLE_BIND_IN, type: DB_TYPE_VARCHAR, val: codeProduit }
    //     },
    //     rowMapper: (row) => {
    //       return {
    //         codeCampagne: row.CD_CAMP,
    //         codeOffre: row.CD_OFFRREFE,
    //         libelleOffre: row.LB_OFFRREFE,
    //         codeProduit: row.CD_PROD,
    //         dateDerniereModification: row.DT_MODI
    //       }
    //     }
    //   })
  }

  async updateOffreReferenceDateDerniereModification(
    offreReference: OffreReferenceResultDto,
  ): Promise<WorkDone<OffreReferenceResultDto>> {
    // await this.oracleDbService.executeQuery<number>(
    //   `UPDATE ADLMASTER_OWNER.OFFRE_REFERENCE
    //    SET DT_MODI = CURRENT_DATE
    //    WHERE CD_CAMP = :codeCampagne
    //      AND CD_OFFRREFE = :codeOffre`,
    //   {
    //     queryBindings: {
    //       codeCampagne: { dir: ORACLE_BIND_IN, type: DB_TYPE_NUMBER, val: offreReference.codeCampagne },
    //       codeOffre: { dir: ORACLE_BIND_IN, type: DB_TYPE_VARCHAR, val: offreReference.codeOffre }
    //     },
    //     isTransaction: true
    //   })
    //
    // const newOffreReference = await this.searchOffreReference(offreReference.codeCampagne, offreReference.codeOffre)
    //
    // if (newOffreReference.isOk && newOffreReference.data) {
    //   return (newOffreReference.data.length > 0) ? WorkDone.buildOk(newOffreReference.data[0]) : WorkDone.buildError(`Update date in Offre Reference error
    // !`) } else { return WorkDone.toError(newOffreReference) }
    return WorkDone.buildOk(offreReference);
  }

  /*
  async getProductListByCriteria (searchDto : ISearchDto<SearchProductDto>) : 
    Promise<WorkDone<IPaginatedListDto>>> {
      const filter = `${searchDto.criterias.labellike}`
      const dbProducts = await this.prismaService.produit.findMany ({
        where : {
          libelle : {
            contains : filter,
            mode : "insensitive"
          }
        },
            orderBy : {
          libelle : "asc"
        }
      })

      if (!dbProducts){
        return WorkDone.buildError("une erreur est survenue durant la recup des produicts")
      }
      return WorkDone.buildOk({})
    }
  */
  
}
