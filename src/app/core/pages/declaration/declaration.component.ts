import { Component } from '@angular/core';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
})
export class DeclarationComponent {
  profiles = [
    { name: 'John Doe', email: 'john.doe@example.com', address: '123 Main St' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', address: '456 Oak St' },
    { name: 'Michael Brown', email: 'michael.brown@example.com', address: '789 Pine St' },
  ];

}
