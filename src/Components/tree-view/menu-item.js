import MenuList from "./menu-list";

export default function MenuItem({ item, count }) {
  return (
    <li>
      {item.label}
      {count && item.children && item.children.length ? (
        <ul>
          <MenuList list={item.children}></MenuList>
        </ul>
      ) : null}
    </li>
  );
}
