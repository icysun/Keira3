import { Component } from '@angular/core';

@Component({
  selector: 'app-item-tab',
  templateUrl: './item_tab.component.html',
  styleUrls: ['./item_tab.component.css']
})
export class ItemTabComponent {

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
