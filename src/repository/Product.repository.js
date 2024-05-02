import { PrismaClient } from "@prisma/client";

export class ProductRepository {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async getProducts() {
        return await this.prisma.product.findMany();
    }

    async saveProduct({ firstname, lastname, description, price, imageUrl }) {
        console.log(firstname, lastname, description, price, imageUrl);
        return await this.prisma.product.create({
            data: {
                firstname,
                lastname,
                description,
                price,
                imageUrl,
            },
        });
    }

    async deleteProduct(id) {
        return await this.prisma.product.delete({
            where: {
                id: parseInt(id),
            },
        });
    }
}