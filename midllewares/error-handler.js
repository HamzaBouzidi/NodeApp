

export function notFoundError(req,res,next){
    const err =new Error("Not Found");
    err.status=404;
    next(err);


};


export function errorHandler(err,req,res,next){
    res.status(500 || err.status).json({
        message: err.message,
    });


};

