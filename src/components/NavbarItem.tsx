import { Link } from 'react-router-dom';


export interface NavBarItemProps{textItem : string, toLink:string,  itemClassName:string}




export default function NavbarItem(prop:NavBarItemProps) {
 

    return (
      
      <Link to={prop.toLink} className={prop.itemClassName} >
      {prop.textItem}</Link>
      );
      
}