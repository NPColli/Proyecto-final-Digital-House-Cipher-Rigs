import ContentRow from "./ContentRow";

/*  Componente creado para contener los 3 ContentRow y linkearlos juntos,
 Hace un pasa mano con los datos */
function ContentRowProducts(props) {
   let users = {
     total: props.usersTotal,
     titulo: "Users",
     border: "card border-left-primary shadow h-100 py-2",
     icono: "fas fa-user-check fa-2x text-gray-300",
   };

   let asic = {
     total: props.asicTotal,
     titulo: "Asic",
     border: "card border-left-success shadow h-100 py-2",
     icono: "fas fa-dollar-sign fa-2x text-gray-300",
   };

   let rig = {
     total: props.rigTotal,
     titulo: "Rig",
     border: "card border-left-warning shadow h-100 py-2",
     icono: "fas fa-clipboard-list fa-2x text-gray-300",
   };

   let boxes = [users, asic, rig];
  return (
    <div className="row">
      {boxes.map((box, i) => {
        return <ContentRow {...box} key={i} />;
      })}
    </div>
  );
}

export default ContentRowProducts;
