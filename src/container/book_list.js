import React ,{Component} from 'react';
import  {connect} from 'react-redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li  key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render(){
        return(
            <ul className="list-group col-sa-4">{this.renderList()}</ul>
        )
    }


}
function mapStateToProps(state){
    return{ boooks:state.books};
    
}
export default connect(mapStateToProps)(BookList);