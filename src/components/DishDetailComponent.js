import {React,Component} from'react';
// import{Media} from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'


    
    function getMonthName(month){
        const d = new Date();
        d.setMonth(month-1);
        const monthName = d.toLocaleString("default", {month: "long"});
        return monthName;
    }
    
    function RenderComments({comments})
    {
        if(comments!=null)
        {      return(
            <div className="col-12 col-md-5 m-1 ">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                                {comments.map((com)=>{
                        return <li key={com.id}>{com.comment}<br/><br/>--{com.author} , {getMonthName(Number(com.date.slice(5,7)))} {com.date.slice(8,10)}, {com.date.slice(0,4)}<br/><br/></li>
                    })}
                </ul>
            </div>
        ) ;
            
        }
        else{
            return(
                <div></div>
            );
            
        }
       
       

    }
    function RenderDish({dish})
    {
        if(dish!=null)
        {
            return(
                
                <div className="col-12 col-md-5 m-1 ">
                <Card>
                   <CardImg width="100%"
                             src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                         
                </Card>
                </div>
            );
        }else{
            return(
            <div></div>//nothing on screen
            );
        }
    }

    const DishDetail=(props)=>{
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dishes}/>
                    <RenderComments comments={props.dishes?.comments}/>
                </div>
            </div>

        );
    }
    
export default DishDetail;
// if (comments == null) {
//     return (<div></div>)
// }
// const cmnts = comments.map(comment => {
//     return (
//         <li key={comment.id}>
//             <p>{comment.comment}</p>
//             <p>-- {comment.author},
//             &nbsp;
//             {new Intl.DateTimeFormat('en-US', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: '2-digit'
//             }).format(new Date(comment.date))}
//             </p>
//         </li>
//     )
// })
// return (
//     <div className='col-12 col-md-5 m-1'>
//         <h4> Comments </h4>
//         <ul className='list-unstyled'>
//             {cmnts}
//         </ul>

//     </div>
// )