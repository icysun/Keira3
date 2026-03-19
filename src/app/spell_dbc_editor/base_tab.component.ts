import { Component } from '@angular/core';

@Component({
  selector: 'app-base-tab',
  templateUrl: './base_tab.component.html',
  styleUrls: ['./base_tab.component.css']
})
export class BaseTabComponent {

  // Existing code...

  // Add tooltips
  addTooltips() {
    const fields = document.querySelectorAll('.field');
    fields.forEach(field => {
      const tooltip = field.getAttribute('data-tooltip') || 'No tooltip provided';
      field.title = tooltip;
    });
  }

  // Call the function to add tooltips on component initialization
  constructor() {
    this.addTooltips();
  }
}
