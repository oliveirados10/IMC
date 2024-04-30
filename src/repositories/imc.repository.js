import { PrismaClient } from "@prisma/client"

export class ImcRepository {
    constructor(){
        this.prisma = new PrismaClient()
    }


    async createImc({name, value}) {
       const imc =  await this.prisma.imc.create({
            data:{
            name,
            value,
        }
    })

        return imc
    }

    async getImcs() {
       const imc = await this.prisma.imc.findMany()
       return imc
    }


    async updateImc({id, name, value}) {
       const imc = await this.prisma.imc.update({
        where: {
            id
        },
        data: {
            name,
            value,
        }
       })

        return imc
    }

        async deleteImc(id) {
        await this.prisma.imc.delete({
            where:{
                id
            },
        })
    }
}