class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = Number(price); 
        this.inStock = 0;
    }

    addToStock(quantity) {
        const parsedQuantity = Number(quantity);
        
        if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
            this.inStock += parsedQuantity;
            alert(`${parsedQuantity} unidades adicionadas! Estoque atual: ${this.inStock}`);
        } else {
            alert(`Digite uma quantidade válida para o estoque!`);
        }
    }

    calculateDiscount(calculateDiscount) {
        const valorPercent = Number(calculateDiscount);
        
        if (!isNaN(valorPercent) && valorPercent >= 0 && valorPercent <= 100) {
            const discountAmount = this.price * (valorPercent / 100);
            const finalPrice = this.price - discountAmount;
            
            return finalPrice;
        } else {
            alert(`Digite um valor de desconto válido (0 a 100)!`);
            return this.price; 
        }
    }
}

const namePrdct = prompt(`Digite um nome para o produto:`);
const descriptionPrdct = prompt(`Digite a descrição do produto:`);
const pricePrdct = prompt(`Digite o preço do produto:`);

const addProduct = new Product(namePrdct, descriptionPrdct, pricePrdct);

const prdctQuantity = prompt(`Digite quantidade de produto que deseja adicionar:`);
addProduct.addToStock(prdctQuantity);

const desconto = prompt(`Digite a porcentagem de desconto:`);
const precoFinal = addProduct.calculateDiscount(desconto);

alert(`Preço original: R$ ${addProduct.price}\nPreço com ${desconto}% de desconto: R$ ${precoFinal.toFixed(2)}`);