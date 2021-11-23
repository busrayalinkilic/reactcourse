import NavItem from "@restart/ui/esm/NavItem";
import { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavLink,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge bg="succes">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink> Empty Cart </NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
