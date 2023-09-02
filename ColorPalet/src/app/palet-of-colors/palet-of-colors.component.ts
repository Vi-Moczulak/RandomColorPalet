import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-palet-of-colors',
  templateUrl: './palet-of-colors.component.html',
  styleUrls: ['./palet-of-colors.component.scss']
})
export class PaletOfColorsComponent {
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.code) {
      case 'Space':
        this.shuffleColors(this.tiles);
        break;
    }
  }

  numberOfColors = 5;
  ids = 5;
  tiles: ColorTileModel[] = [
    { id: 1, colorHex: '#42d84d', blockedIcon: 'lock_open', blocked: false },
    { id: 2, colorHex: '#2c31fc', blockedIcon: 'lock_open', blocked: false },
    { id: 3, colorHex: '#b286e5 ', blockedIcon: 'lock_open', blocked: false },
    { id: 4, colorHex: '#a7e6ff', blockedIcon: 'lock_open', blocked: false },
    { id: 5, colorHex: '#a6cfd0', blockedIcon: 'lock_open', blocked: false },
  ];

  addColor() {
    this.numberOfColors = this.numberOfColors + 1;
    this.ids = this.ids + 1;
    this.tiles.push({ id: this.ids, colorHex: '#DDBDF1', blockedIcon: 'lock_open', blocked: false });
    this.shuffleColor(this.tiles[this.tiles.length - 1]);
  }

  removeTiles(tile: ColorTileModel) {
    if (this.numberOfColors > 1) {
      this.tiles.splice(tile.id, 1);
      this.numberOfColors = this.numberOfColors - 1;
    }
  }

  shuffleColors(tiles: ColorTileModel[]) {
    tiles.forEach(tile => {
      if (!tile.blocked)
        this.shuffleColor(tile);
    });
  }

  shuffleColor(tile: ColorTileModel) {
    tile.colorHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  changeBlocked(tile: ColorTileModel) {
    tile.blocked = !tile.blocked
    if (tile.blocked) {
      tile.blockedIcon = 'lock';
    } else {
      tile.blockedIcon = 'lock_open';
    }
  }

  copyToClipboard() {
    return this.tiles.map(tile => tile.colorHex).join(', ');
  }

}

export interface ColorTileModel {
  id: number;
  colorHex: string;
  blocked?: boolean;
  blockedIcon?: string;
}