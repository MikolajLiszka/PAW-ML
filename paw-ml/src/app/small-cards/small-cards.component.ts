import { Component } from '@angular/core';

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.scss', './../../small-cards.scss']
})
export class SmallCardsComponent {

  protected value = "$ 50,000";
  protected revenue = "Total revenue";
}
