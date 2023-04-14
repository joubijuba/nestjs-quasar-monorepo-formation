import { CodeLabelResultDto } from '@formation/shared-lib'
import { DbPartenaire } from './prisma-composition-types'

export function convertDbPartenaireToCodeLabelResultDto (dbPartenaire: DbPartenaire): CodeLabelResultDto {
  return {
    code: dbPartenaire.code,
    label: dbPartenaire.libelle
  }
}
