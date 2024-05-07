import { ImcRepository } from '../repositories/imc.repository.js'

export class ImcsController {
    constructor() {
        this.repository = new ImcRepository();
    }

    getAllImcs = async (req, res) => {
        const allImcs = await this.repository.getImcs()
        return res.json(allImcs)
    }

    createImc = async (req, res) => {
        const imc = req.body;


        const createdImc = await this.repository.createImc(imc)


        return res.json(createdImc)
    }

    updateImc = async (req, res) => {
        const id = Number(req.params.id)
        const imc = req.body

        const imcUpdated = await this.repository.updateImc({ id, ...imc })

        return res.json(imcUpdated)

    }

    deleteImc = async (req, res) => {
        const id = Number(req.params.id)

        await this.repository.deleteImc(id)

        return res.json({ ok: true })
    }
}
