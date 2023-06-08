import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu = () =>{
    return (
        <ListGroup>
            <ListGroupItem tag="a" href="/" action >
                Home
            </ListGroupItem> 
            <ListGroupItem tag="a" href="/get-doc" action>
                Documents
            </ListGroupItem> 
            <ListGroupItem tag="a" href="/get-settings" action>
                Setting
            </ListGroupItem> 
            <ListGroupItem tag="a" href="/get-contacts" action>
                Contacts
            </ListGroupItem>  
            <ListGroupItem tag="a" href="/get-more" action>
                More
            </ListGroupItem>    
        </ListGroup>
    );
};

export default Menu;