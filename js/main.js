$(document).ready(function() {
    console.log("Ready");
    
    obtenerDatos();
    taskStatus();

});


const obtenerDatos = () => {

    let url = 'assets/data.json';

    $.ajax({
        dataType: "json",
        url: url,
        success: function(data) {

            armarTabla(data) 
        }
    });

}

const armarTabla = (data) => {
    let table =  ` 
    <table class="table table-striped" id="tableIndex">
    <thead>
        <th>ID</th>
        <th>TITULO</th>
        <th>DESCRIPCION</th>
        <th>ESTADO</th>
    </thead>
    <tbody id="bodyTableIndex">` ;

    data.forEach(x=>{
        // console.log(x.fecha)
        table +=
        `<tr>
        <td>${x.id}</td>
        <td>${x.titulo}</td>
        <td>${x.descripcion}</td>
        <td>${x.estado}</td>
        </tr>
        `
    })

    table += '</tbody></table>'

    activeDatatable(table)


}  

const activeDatatable = async (table) =>{

    $("#tableIndex").remove() 
    $("#table_wrapper").remove() 
    $(".divTable").append(table)
    

    $('#tableIndex').DataTable({
      "language": {
        
          "sProcessing":     "Procesando...",
          "sLengthMenu":     "Mostrar _MENU_ registros",
          "sZeroRecords":    "No se encontraron resultados",
          "sEmptyTable":     "Ningún dato disponible en esta tabla",
          "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
          "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
          "sInfoPostFix":    "",
          "sSearch":         "Buscar:",
          "sUrl":            "",
          "sInfoThousands":  ",",
          "sLoadingRecords": "Cargando...",
          "oPaginate": {
              "sFirst":    "Primero",
              "sLast":     "Último",
              "sNext":     "Siguiente",
              "sPrevious": "Anterior"
          },
          "oAria": {
              "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
              "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          },
          "buttons": {
              "copy": "Copiar",
              "colvis": "Visibilidad"
          }
      
      },
      select: true,
      dom: 'lBfrtip', 
      buttons: [   'copy', 'excel', 'pdf', 'print' ],
      "pageLength": 5,
      fixedHeader: true
    });

    
};

const taskStatus = () => {
    const table = document.querySelector("#bodyTableIndex");
    const rows = table.querySelectorAll("tr")
    rows.forEach(x=>{
        switch (x.querySelectorAll("td")[3].innerHTML) {
            case 'Done':
                x.querySelectorAll("td")[3].style.color = 'blue'
                x.querySelectorAll("td")[3].innerHTML.bold()
                break;
        
            default:
                break;
        }
    })
}



