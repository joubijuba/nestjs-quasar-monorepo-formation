import {
  LoggerService,
  PrismaService
} from '@formation/servers-lib/dist/services'
import {
  CustomerSearchResultDto,
  IPaginatedListDto,
  ISearchDto,
  SearchCustomerDto,
  WorkDone
} from '@formation/shared-lib'
import { Injectable } from '@nestjs/common'

// function toCustomerSearchResultDtoRowMapper (row: any): CustomerSearchResultDto {
//   return {
//     codeFichierPartenaire: row.CD_FICHPART,
//     chronoClient: row.NM_CHROCLIE,
//     prenom: row.LB_PREN,
//     nom: row.LB_NOM,
//     codePostal: row.CD_POST,
//     ville: row.LB_COMM,
//     dateDerniereCommande: row.DT_COMM
//   }
// }

@Injectable()
export class CustomersService {

  constructor (
    private readonly logger: LoggerService,
    private readonly prismaService: PrismaService,
  ) {
    this.logger.info('CustomersService created')
  }

  async findOne (codeFichierPartenaire: string, chronoClient: string): Promise<WorkDone<CustomerSearchResultDto>> {

    // const wd = await this.oracleDbService.executeQuery<CustomerSearchResultDto>(
    //   `SELECT cli.CD_FICHPART, cli.NM_CHROCLIE, cli.LB_PREN, cli.LB_NOM, cli.CD_POST, cli.LB_COMM, com.DT_COMM
    //             FROM ADLMASTER_OWNER.VS_CLIENT cli
    //                 LEFT OUTER JOIN ADLMASTER_OWNER.VS_COMMANDE com
    //                             ON com.CD_FICHPART = cli.CD_FICHPART AND com.NM_CHROCLIE = cli.NM_CHROCLIE
    //                                 AND NOT EXISTS (SELECT 1 FROM ADLMASTER_OWNER.VS_COMMANDE com2
    //                                                 WHERE com2.CD_FICHPART = com.CD_FICHPART AND com2.NM_CHROCLIE = com.NM_CHROCLIE AND com2.ID_COMM >
    // com.ID_COMM) WHERE cli.CD_FICHPART = :cdFichPart AND cli.NM_CHROCLIE = :nmChroClie `, { cdFichPart: codeFichierPartenaire, queryBindings: { cdFichPart:
    // { dir: ORACLE_BIND_IN, type: ORACLE_STRING, val: codeFichierPartenaire }, nmChroClie: { dir: ORACLE_BIND_IN, type: ORACLE_STRING, val: chronoClient },
    // }, rowMapper: toCustomerSearchResultDtoRowMapper })  if (wd.isOk && wd.data) { return (wd.data.length > 0) ? WorkDone.buildOk(wd.data[0]) :
    // WorkDone.buildError(`Customer with ChronoClient ${chronoClient} not found in fichPart ${codeFichierPartenaire} !`) } else { return WorkDone.toError(wd)
    // }
    return WorkDone.buildOk(
      {
        codeFichierPartenaire: '001',
        chronoClient: '11111111',
        nom: 'Doe',
        prenom: 'John',
        codePostal: '34130',
        ville: 'Mauguio',
        dateDerniereCommande: null
      }
    )
  }

  async searchCustomer (searchDto: ISearchDto<SearchCustomerDto>): Promise<WorkDone<IPaginatedListDto<CustomerSearchResultDto>>> {

    //FIXME must be dynamic
    // searchDto.pagination.sortBy = (searchDto.pagination.sortBy === 'nom') ? 'LB_NOM'
    //   : (searchDto.pagination.sortBy === 'prenom') ? 'LB_PREN'
    //     : (searchDto.pagination.sortBy === 'chronoClient') ? 'NM_CHROCLIE'
    //       : (searchDto.pagination.sortBy === 'codePostal') ? 'CD_POST'
    //         : (searchDto.pagination.sortBy === 'ville') ? 'LB_COMM'
    //           : (searchDto.pagination.sortBy === 'dateDerniereCommande') ? 'DT_COMM'
    //             : null
    //
    // return this.oracleDbService.executeQueryWithPaging<CustomerSearchResultDto>(
    //   `SELECT cli.CD_FICHPART, cli.NM_CHROCLIE, cli.LB_PREN, cli.LB_NOM, cli.CD_POST, cli.LB_COMM, com.DT_COMM
    //    FROM ADLMASTER_OWNER.VS_CLIENT cli
    //             LEFT OUTER JOIN ADLMASTER_OWNER.VS_COMMANDE com
    //                             ON com.CD_FICHPART = cli.CD_FICHPART AND com.NM_CHROCLIE = cli.NM_CHROCLIE
    //                                 AND NOT EXISTS(SELECT 1
    //                                                FROM ADLMASTER_OWNER.VS_COMMANDE com2
    //                                                WHERE com2.CD_FICHPART = com.CD_FICHPART
    //                                                  AND com2.NM_CHROCLIE = com.NM_CHROCLIE
    //                                                  AND com2.ID_COMM > com.ID_COMM)
    //    WHERE cli.CD_FICHPART = :cdFichPart
    //      AND (:hasNmChroClie = 0 OR cli.NM_CHROCLIE = :nmChroClie)
    //      AND (:hasLbNom = 0 OR cli.LB_NOM LIKE :lbNom)
    //      AND (:hasLbPren = 0 OR cli.LB_PREN LIKE :lbPren)
    //      AND (:hasCdPost = 0 OR cli.CD_POST LIKE :cdPost)
    //      AND (:hasLbComm = 0 OR cli.LB_COMM LIKE :lbComm)
    //   `,
    //   {
    //     cdFichPart: searchDto.criterias.codeFichierPartenaire,
    //     queryBindings: {
    //       cdFichPart: { dir: ORACLE_BIND_IN, type: ORACLE_STRING, val: searchDto.criterias.codeFichierPartenaire },
    //       hasNmChroClie: { dir: ORACLE_BIND_IN, type: DB_TYPE_NUMBER, val: !!searchDto.criterias.chronoClient ? 1 : 0 },
    //       nmChroClie: { dir: ORACLE_BIND_IN, type: ORACLE_STRING, val: searchDto.criterias.chronoClient },
    //       hasLbNom: { dir: ORACLE_BIND_IN, type: DB_TYPE_NUMBER, val: !!searchDto.criterias.nom ? 1 : 0 },
    //       lbNom: { dir: ORACLE_BIND_IN, type: ORACLE_STRING, val: searchDto.criterias.nom + '%' },
    //       hasLbPren: { dir: ORACLE_BIND_IN, type: DB_TYPE_NUMBER, val: !!searchDto.criterias.prenom ? 1 : 0 },
    //       lbPren: { dir: ORACLE_BIND_IN, type: ORACLE_STRING, val: searchDto.criterias.prenom + '%' },
    //       hasCdPost: { dir: ORACLE_BIND_IN, type: DB_TYPE_NUMBER, val: !!searchDto.criterias.codePostal ? 1 : 0 },
    //       cdPost: { dir: ORACLE_BIND_IN, type: ORACLE_STRING, val: searchDto.criterias.codePostal + '%' },
    //       hasLbComm: { dir: ORACLE_BIND_IN, type: DB_TYPE_NUMBER, val: !!searchDto.criterias.ville ? 1 : 0 },
    //       lbComm: { dir: ORACLE_BIND_IN, type: ORACLE_STRING, val: searchDto.criterias.ville + '%' }
    //     },
    //     pagination: searchDto.pagination,
    //     rowMapper: toCustomerSearchResultDtoRowMapper
    //   })
    return WorkDone.buildOk({
      rowsNumber: 2, list: [
        {
          codeFichierPartenaire: '001',
          chronoClient: '11111111',
          nom: 'Doe',
          prenom: 'John',
          codePostal: '34130',
          ville: 'Mauguio',
          dateDerniereCommande: null
        },
        {
          codeFichierPartenaire: '001',
          chronoClient: '22222222',
          nom: 'Durand',
          prenom: 'Michel',
          codePostal: '34000',
          ville: 'Montpellier',
          dateDerniereCommande: new Date()
        }
      ]
    })
  }
}
