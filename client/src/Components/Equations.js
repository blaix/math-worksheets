export function init(component) {
    component.ports.print.subscribe(function(message) {
        window.print();
    });
}
