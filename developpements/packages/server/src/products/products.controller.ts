import { LoggerService } from '@formation/servers-lib/dist/services'
import { AbstractController } from '@formation/servers-lib/dist/utils'
import {
  CodeLabelResultDto,
  OffreReferenceResultDto,
  WorkDone,
  ProductDto,
  SearchProductsDto
} from '@formation/shared-lib'
import {
  Controller,
  Get,
  Param,
  Put,
  Query,
  Body,
  Post,
} from '@nestjs/common'
import { productsService } from './products.service'
import { ApiBody } from '@nestjs/swagger'

@Controller('products')
export class productsController extends AbstractController {

  constructor (
    private readonly logger: LoggerService,
    private readonly productsService: productsService
  ) {
    super()
    this.logger.info('productsController created')
  }

  @Get("/products")
  async getProduit (filters : SearchProductsDto) : Promise<WorkDone<ProductDto[]>> {
    return this.productsService.getProduits(filters)
  }

  /*
  @Get('/campagne/:codeCampagne/offres-ref/:codeOffre')
  async findOffreReference (@Param('codeCampagne') codeCampagne: string,
    @Param('codeOffre') codeOffre: string): Promise<WorkDone<OffreReferenceResultDto>> {
    const wd = await this.productsService.searchOffreReference(parseInt(codeCampagne, 10), codeOffre)
    if (wd.isOk && !!wd.data) {
      // Mise à jour de la date de dernière modification
      return this.productsService.updateOffreReferenceDateDerniereModification(wd.data[0])
    }
    return WorkDone.toError(wd)
  }
  */

  /*
  @Get('/fichparts')
  async getAllFichParts (): Promise<WorkDone<CodeLabelResultDto[]>> {
    return this.productsService.getAllFichParts()
  }
  */

  /*
  @Get('/campagne/:codeCampagne/offres-ref')
  async searchOffresReferences (@Param('codeCampagne') codeCampagne: string,
    @Query('codeProduit') codeProduit?: string): Promise<WorkDone<OffreReferenceResultDto[]>> {
    return this.productsService.searchOffreReference(parseInt(codeCampagne, 10), null, codeProduit)
  }
  */

  /*
  @Get("/produits/:codeProduit")
  /// @Param decorator is used to retrieve :codeProduit, it's any string
  // that is inserted after "/""
  async getOneProductByCode (@Param("codeProduit") codeProduit : string) :
    Promise<WorkDone<ProductDto>> {
      return this.productsService.getOneProduct(codeProduit)
  }
  */

  /*
  @Post("produits") @ApiBody({})
  /// We will need to use the middleware Body in order to intercept
  // the body of the Put request
  async createProduct (@Body() product : ProductDto) : 
    Promise<WorkDone<string>>{
      return this.productsService.createProduct(product)
  }
  */

  /*
  @Put("produits/:code") 
  @ApiBody({})
  async updateProduct(
    @Param("code") code : string,
    @Body() product : ProductDto) : 
    Promise<WorkDone<String>> {
      return this.productsService.updateProduct(code, product)
    }
  */

}
