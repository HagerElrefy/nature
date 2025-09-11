import { Component } from '@angular/core';
import { DropdownComponent } from "../../../shared/dropdown/dropdown.component";
// import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-nav-bar',
  imports: [DropdownComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  links = [
    { isDropDwon: false, title: 'Our Companies' },
    { isDropDwon: true, title: 'Our Services' },
    { isDropDwon: true, title: 'Our Projects' },
    { isDropDwon: false, title: 'Our Story' },
    { isDropDwon: true, title: 'Resources' }
  ]
  // items!: MenuItem[];
  // ngOnInit() {
  //   this.items = [
  //     {
  //       // label: 'Files',
  //       // icon: 'pi pi-file',
  //       items: [
  //         {
  //           label: 'Documents',
  //           icon: 'pi pi-file',
  //           // items: [
  //           //   {
  //           //     label: 'Invoices',
  //           //     icon: 'pi pi-file-pdf',
  //           //     items: [
  //           //       {
  //           //         label: 'Pending',
  //           //         icon: 'pi pi-stop'
  //           //       },
  //           //       {
  //           //         label: 'Paid',
  //           //         icon: 'pi pi-check-circle'
  //           //       }
  //           //     ]
  //           //   },
  //           //   {
  //           //     label: 'Clients',
  //           //     icon: 'pi pi-users'
  //           //   }
  //           // ]
  //         },
  //         {
  //           label: 'Images',
  //           icon: 'pi pi-image',
  //           // items: [
  //           //   {
  //           //     label: 'Logos',
  //           //     icon: 'pi pi-image'
  //           //   }
  //           // ]
  //         }
  //       ]
  //     }
  //   ]
  // }

  changeLanguage() { }
}
