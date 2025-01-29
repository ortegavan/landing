import { Component } from '@angular/core';

@Component({
    selector: 'app-price',
    imports: [],
    templateUrl: './price.component.html',
    styleUrl: './price.component.css',
})
export class PriceComponent {
    comprarKindle() {
        window.open(
            'https://www.amazon.com.br/Angular-prática-jornada-zero-deploy-ebook/dp/B0DSM4D3V2/ref=sr_1_1?crid=1JTPJOFI5Z8ES&dib=eyJ2IjoiMSJ9.HtI5kUqU1q-iKdqXlvDjUhroUW5Y1MUFc3tY1ejlLvLh_7Q-fI7YzrCQrc25KJp-KKjQverYzjzzGJDXPcQN7VNTOmJrbJLPAiD6xs0LZBeqJrBlJTqp3cmI2pEDmoeYxYfgyr0I4xeiBiZGJ18L-QLbqkUr2LRtPWR52hLFJ9eZNyfHG6fdYOP43--ganDVcsMcl5hx9vEgr49uJPxrO9K5LoWmbABjwBRE9F1d4b8.AjD2wGxONrd2y80OiylkaHkX8Ri0wzYvQkHqGj14ihM&dib_tag=se&keywords=angular+na+prática&qid=1738185112&s=digital-text&sprefix=%2Cdigital-text%2C188&sr=1-1',
            '_blank'
        );
    }
}
