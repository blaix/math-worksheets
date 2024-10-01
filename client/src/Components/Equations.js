export function init(component) {
    component.ports.print.subscribe(function() {
        window.print();
    });
}
