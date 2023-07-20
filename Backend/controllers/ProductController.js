//importamos el metodo
import ProductModel from "../models/ProductModel.js";


// Metodos para el CRUD

//Mostrar todos los products

export const getAllProducts = async(req, res) =>{
   try {
      const products = await ProductModel.find()
      res.status(200).json(products)

   }catch (error){
      res.json ({message: error.message})
   }
} 


//Mostrar un product

export const getProduct = async(req, res) =>{
   try {
      const id = req.params.id
      await ProductModel.findById( {_id:id}).then ( (product) => {
         res.status(200).json(product)
      })  
   }catch (error){
      res.json ({message: error.message})
   }
} 

//Crear un product

export const createProduct = async (req,res) => {
   try {
      await  ProductModel.create(req.body)
      res.status(200).json({
         "message":"¡product creado correctamente"
      })
   } catch (error) {
      res.json ({message: error.message})
   }
}

//Actualizar un product

export const updateProduct = async (req,res) => {
   try {
      const id = req.params.id

      await ProductModel.updateOne( {_id:id}, req.body).then(res =>{
         console.log(res)
      })
      res.status(200).json({
         "message":"¡product actualizado correctamente!"
      })
   } catch (error) {
      res.json({message: error.message})
   }
}

//Eliminar un product 

export const deleteProduct = async(req, res) => {
   try {
      const id = req.params.id
      await ProductModel.deleteOne ({_id:id}).then (res =>{
         console.log(res)
      })
      res.status(200).json({
         "message":"¡product eliminado correctamente!"
      })
      
   } catch (error) {
      res.json({message: error.message}) 
   }
}

// Buscar por palabra
export const getSearchProduct = async (req, res) => {
   try {
     const query = req.params.name;
     const products = await ProductModel.findByName(query);
     res.status(200).json(products);
   } catch (error) {
     res.json({ message: error.message });
   }
 };