import { LoggerService } from '@formation/servers-lib/dist/services'
import { AbstractController } from '@formation/servers-lib/dist/utils'
import {
  CodeLabelResultDto,
  OffreReferenceResultDto,
  WorkDone
} from '@formation/shared-lib'
import {
  Controller,
  Get,
  Param,
  Query
} from '@nestjs/common'
import { RefsService } from './refs.service'

@Controller('refs')
export class RefsController extends AbstractController {

  constructor (
    private readonly logger: LoggerService,
    private readonly refsService: RefsService
  ) {
    super()
    this.logger.info('RefsController created')
  }

  @Get('/campagne/:codeCampagne/offres-ref/:codeOffre')
  async findOffreReference (@Param('codeCampagne') codeCampagne: string,
    @Param('codeOffre') codeOffre: string): Promise<WorkDone<OffreReferenceResultDto>> {
    const wd = await this.refsService.searchOffreReference(parseInt(codeCampagne, 10), codeOffre)
    if (wd.isOk && !!wd.data) {
      // Mise à jour de la date de dernière modification
      return this.refsService.updateOffreReferenceDateDerniereModification(wd.data[0])
    }
    return WorkDone.toError(wd)
  }

  @Get('/fichparts')
  async getAllFichParts (): Promise<WorkDone<CodeLabelResultDto[]>> {
    return this.refsService.getAllFichParts()
  }

  @Get('/campagne/:codeCampagne/offres-ref')
  async searchOffresReferences (@Param('codeCampagne') codeCampagne: string,
    @Query('codeProduit') codeProduit?: string): Promise<WorkDone<OffreReferenceResultDto[]>> {
    return this.refsService.searchOffreReference(parseInt(codeCampagne, 10), null, codeProduit)
  }

}
