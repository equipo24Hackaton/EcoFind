import express from 'express'
import {getAllProducts, getProduct, createProduct, updateProduct, deleteProduct, getSearchProduct} from '../controllers/ProductController.js'
//import { getAllAlbaranes, getAlbaran, createAlbaran, updateAlbaran, deleteAlbaran } from '../controllers/AlbaranController.js'

const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.get('/search/:name', getSearchProduct);




export default router;