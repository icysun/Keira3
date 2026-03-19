import { Component } from '@angular/core';

@Component({
  selector: 'app-effect-tab',
  templateUrl: './effect_tab.component.html',
  styleUrls: ['./effect_tab.component.css']
})
export class EffectTabComponent {

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
