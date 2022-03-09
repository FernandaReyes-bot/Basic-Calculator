class Nodo {
    constructor(dato) {
        this.data = dato;
        this.next = null;
    }
}

class Pilas {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(data) {
        const newNode = new Nodo(data);
        if (this.top == null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    pop() {
        var dato = null;
        if (!this.isEmpty()) {
            this.size--;
            dato = this.top.data;
            this.top = this.top.next;
        }
        return dato;
    }


    show() {
        let current = this.top;
        for (let i = 0; i < this.size; i++) {
            console.log(current.data);
            current = current.next;
        }
    }

    showS() {
        let current = this.top;
        var texto = "[ ";
        for (let i = 0; i < this.size; i++) {
            texto = texto + Number(current.data) + (((i + 1) != this.size) ? " , " : " ]");
            current = current.next;
        }
        return texto;
    }

    showProfe() {
        if (!this.isEmpty()) {
            let current = this.top;
            while (current.next) {
                console.log(current.data);
                current = current.next
            }
            console.log(current.data);
        }
    }

    showV() {
        let current = this.top;
        var texto = [];
        for (let i = 0; i < this.size; i++) {
            texto[i] = current.data;
            current = current.next;
        }
        return texto;
    }

    reverse() {
        let current = this.top;
        var v = [];
        for (let i = 0; i < this.size; i++) {
            v[i] = current.data;
            current = current.next;
        }

        var apt = this.size - 1;
        for (let i = 0; i < this.size; i++) {
            if (i < apt) {
                var aux = v[apt];
                v[apt] = v[i];
                v[i] = aux;
                apt--;
            }
        }
        return v;
    }

    getSize() {
        let current = this.top;
        var size = 0;
        for (let i = 0; i < this.size; i++) {
            size++;
            current = current.next;
        }
        return size;
    }

    getsize() {
        return this.size;
    }

    showAllanSeguido() {
        var objeto = this.top;
        var texto = "";
        for (let i = 0; i < this.size; i++) {
            texto += (objeto.next) ? objeto.data += ", " : objeto.data += ". ";
            objeto = objeto.next;
        }
        console.log(texto);
    }

    isEmpty() {
        return (this.top == null ? true : false);
    }

    peek() {
        var dato = null;
        if (!this.isEmpty())
            var dato = this.top.data;
        return dato;
    }

    seek(unit) {
        //let info = this.showV();      Crea un vector llamado info, con la función showV  
        //let pos= info.index0f(11);    Permite encontrar en un vector estático cierto número, si lo encuentra, devuelve la posición, sino -1

        let value = -1;
        var current = this.top;

        var i = 1;
        while (current) {
            if (current.data == unit) {
                value = i;
                break;
            }
            current = current.next;
            i++;
        }
        return value;
    }
}

class Colas {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Nodo(data);
        this.size++;
        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    show() {
        let current = this.head;
        for (let i = 0; i < this.size; i++) {
            console.log(current.data);
            current = current.next;
        }
    }

    dequeue() {
        var dato = null;
        if (!this.isEmpty()) {
            this.size--;
            dato = this.head.data;
            this.head = this.head.next;
        }
        return dato;
    }

    showV() {
        let current = this.head;
        var texto = [];
        for (let i = 0; i < this.size; i++) {       // while (current.next!=null)
            texto[i] = current.data;
            current = current.next;
        }
        return texto;
    }

    reverse() {
        var v = [];
        var current = this.head;
        for (var i = 0; i < this.size; i++) {
            v[i] = current.data
            current = current.next;
        }

        var apt = this.size - 1;
        for (let i = 0; i < this.size; i++) {
            if (i < apt) {
                var aux = v[apt];
                v[apt] = v[i];
                v[i] = aux;
                apt--;
            }
        }
        return v;
    }

    getSize() {
        let current = this.head;
        for (var i = 0; i < this.size; i++)
            current = current.next;
        return i;
    }

    getsize() {
        return this.size;
    }

    isEmpty() {
        return (this.top == null ? true : false);
    }

    peek() {
        var value = null;
        let current = this.head;
        if (current) {
            while (current.next)
                current = current.next;
            value = current.data
        }
        return value;
    }

    seek(unit) {
        let value = -1;
        var current = this.head;

        var i = 1;
        while (current) {
            if (current.data == unit) {
                value = i;
                break;
            }
            current = current.next;
            i++;
        }
        return value;


    }
}


function polish(Q, P, pila) {

    Q.unshift("(");                     // Add automatically "(" to the begining of the array

    for (var i = 0; Q[i] != null; i++) {
    }
    Q[i] = ")";                         // Add manually ")" to the end of the array


    for (let i = 0; Q[i] != null; i++) {

        var d = pila.peek();
        switch (Q[i]) {
            case '-':
            case '+':
                while (d == '+' || d == '-' || d == '*' || d == '/' || d == "^") {
                    P.enqueue(pila.pop());
                    d = pila.peek();
                }
                pila.push(Q[i]);
                break;
            case '*':
            case '/':
                while (d == "*" || d == "/" || d == "^") {
                    P.enqueue(pila.pop());
                    d = pila.peek();
                }
                pila.push(Q[i]);
                break;
            case '^':
                while (d == "^") {
                    P.enqueue(pila.pop());
                    d = pila.peek();
                }
                pila.push(Q[i]);
                break;
            case '(':
                pila.push(Q[i]);
                break;
            case ')':
                while (d != '(') {
                    if (d == '+' || d == '-' || d == '*' || d == '/' || d == '^') {
                        P.enqueue(pila.pop());
                    }
                    d = pila.peek();
                }
                pila.pop();
                break;
            default:                    // In case of number (operand).
                P.enqueue(Q[i]);
                break;
        }
    }

    return P;
}

function erase_element_array(v) {
    for (var i = 0; v[i] != null; i++) {
      if (v[i] == "") {
        v.splice(i, 1)
        i--;
      }
    }
    return v;
  }

function value_postfix(p, stack) {
    var valor = 0;
    for (var i = 0; p[i] != null; i++) {
    }
    p[i] = ")";


    for (let i = 0; p[i] != ")"; i++) {
        switch (p[i]) {
            case '^':
                var A = pila.pop();
                var B = pila.pop();
                var op = p[i];
                pila.push(Math.pow(B,A));
                break;
            case '-':
            case '+':
            case '*':
            case '/':
                var A = pila.pop();
                var B = pila.pop();
                var op = p[i];
                pila.push(eval(B + op + A));
                break;
            default:                        // In case of number
                pila.push(p[i])
                break;
        }
    }
    valor = pila.pop();
    return valor;
}