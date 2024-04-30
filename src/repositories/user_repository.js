import { PrismaClient } from "@prisma/client";

export class UserRepository {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async registerUser({ firstname, lastname, email, password }) {
        try {
            return await this.prisma.user.create({
                data: {
                    firstname,
                    lastname,
                    email,
                    password,

                }
            });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
