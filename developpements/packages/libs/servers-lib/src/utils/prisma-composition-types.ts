import { Prisma } from '../.prisma/client'

const dbPartenaire = Prisma.validator<Prisma.PartenaireArgs>()({})

export type DbPartenaire = Prisma.PartenaireGetPayload<typeof dbPartenaire>
