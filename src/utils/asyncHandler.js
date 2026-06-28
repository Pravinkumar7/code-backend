const asyncHandler = (requestHandler) =>{

    (req, res,next, error)=>{
        Promise.resolve(requestHandler(req,res,next,error)).catch((error)=>{
            next(error)
        })
    }

}



export {asyncHandler}


// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {}

// const asyncHandler = (func) => async (req, res, next, error) => {

//     try {
        await func(req, res, next, error)
//     } catch (error) {

//         res.status(error.code || 500 ).json({
//             success: true,
//             message: error.message
//         })
        
//     }
// }