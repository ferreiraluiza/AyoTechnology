import e from 'cors'
import ayotechController from "./src/controller/ayotechController.js"


export default function adiconarRotas(servidor){
    servidor.use(ayotechController)
}