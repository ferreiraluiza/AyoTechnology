import e from 'cors'
import nutrilifeController from './src/controller/nutrilifeController.js'


export default function adiconarRotas(servidor){
    servidor.use(nutrilifeController)
}