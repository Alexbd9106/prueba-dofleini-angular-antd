import { Component, OnInit } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';

import { NzIconService } from 'ng-zorro-antd/icon';
import { ColorEvent } from 'ngx-color';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const uploadIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"><defs></defs><g><path d="M11.556,13H1.444A1.446,1.446,0,0,1,0,11.555V2.527A1.433,1.433,0,0,1,.332,1.6L1.336.4A1.053,1.053,0,0,1,2.167,0h8.666a1.084,1.084,0,0,1,.838.389l1,1.214A1.466,1.466,0,0,1,13,2.527v9.028A1.446,1.446,0,0,1,11.556,13ZM6.5,4.844a.355.355,0,0,0-.253.1L2.528,8.666H5.056v1.444H7.945V8.666h2.527L6.753,4.947A.353.353,0,0,0,6.5,4.844ZM2.124.722h0l-.592.722h9.931L10.79.722Z"/></g></svg>';
const exclamationIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="18.3" height="18.528" viewBox="0 0 18.3 18.528"><defs><style>.b{stroke-width:1.3px;}.c{stroke-linecap:round;stroke-width:2px;}</style></defs><g class="a" transform="translate(0.65 0.65)"><ellipse class="b" cx="8.5" cy="8.614" rx="8.5" ry="8.614"/><line class="c" y2="5.067" transform="translate(8.5 3.547)"/><ellipse cx="1.5" cy="1.52" rx="1.5" ry="1.52" transform="translate(7 11.148)"/></g></svg>';

@Component({
  selector: 'configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
})
export class ConfiguracionComponent implements OnInit {
  loading = false;
  avatarUrl?: string;

  logo!: string;
  espacio_trabajo!: string;
  dominio!: string;
  personas!: string;
  color: string = '#48b5fe';
  privacidad!: string;

  cantidad_personas_array = [
    { nombre: 'Sólo yo', value: false },
    { nombre: '2-10', value: false },
    { nombre: '11-25', value: false },
    { nombre: '26-50', value: false },
    { nombre: '51-100', value: false },
    { nombre: '500+', value: false },
  ];

  color_array = [
    { nombre: '#39b0ff' },
    { nombre: '#04b58b' },
    { nombre: '#3e9c4b' },
    { nombre: '#b6bc00' },
    { nombre: '#e59100' },
    { nombre: '#e55c00' },
    { nombre: '#ee1f50' },
    { nombre: '#d6198a' },
    { nombre: '#b321f1' },
  ];

  privacidad_array = [
    {
      nombre: 'Privado',
      comentario:
        'El contenido será visible sólo para ti y los miembros de tu Organización.',
      value: false,
    },
    {
      nombre: 'Público',
      comentario:
        'Cualquiera con el vínculo podrá ver la actividad de tu Organización.',
      value: false,
    },
  ];

  state = false;

  form!: FormGroup;

  imagePreview!: string;

  constructor(
    private msg: NzMessageService,
    private iconService: NzIconService
  ) {
    this.iconService.addIconLiteral('ng-zorro:upload', uploadIcon);
    this.iconService.addIconLiteral('ng-zorro:exclamation', exclamationIcon);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      logo: new FormControl(null, { validators: [Validators.required] }),
      nombre_espacio: new FormControl(null, {
        validators: [Validators.required],
      }),
      url_espacio: new FormControl(null, { validators: [Validators.required] }),
      cantidad_personas: new FormControl(null, {
        validators: [Validators.required],
      }),
      color: new FormControl(null, { validators: [Validators.required] }),
      privacidad: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ logo: file });
    this.form.get('logo').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);

    this.logo = this.form.value.logo.name;
  }

  selectCantidadPersonas(cantidad: string) {
    this.form.value.cantidad_personas = cantidad;
    this.personas = cantidad;
  }

  colorPickerOpen() {
    this.state = true;
  }

  colorPickerClose() {
    this.state = false;
  }

  selectColor(color: string) {
    this.form.value.color = color;
    this.color = color;
  }

  handleChangeColor($event: ColorEvent) {
    this.form.value.color = $event.color.hex;
    this.color = $event.color.hex;
  }

  selectPrivacidad(privacidad: string) {
    this.form.value.privacidad = privacidad;
    this.privacidad = privacidad;
  }

  onSaveConfig() {
    if (
      this.form.value.logo == null ||
      this.form.value.nombre_espacio == null ||
      this.form.value.url_espacio == null ||
      this.form.value.cantidad_personas == null ||
      this.form.value.color == null ||
      this.form.value.privacidad == null
    ) {
      if (this.form.value.logo == null) {
        this.msg.error('Seleccione un logotipo para su espacio de trabajo');
      }

      if (this.form.value.nombre_espacio == null) {
        this.msg.error('Escriba un nombre para su espacio de trabajo');
      }

      if (this.form.value.url_espacio == null) {
        this.msg.error('Escriba una url para su espacio de trabajo');
      }

      if (this.form.value.cantidad_personas == null) {
        this.msg.error('Seleccione con cuántas personas usted trabaja');
      }

      if (this.form.value.color == null) {
        this.msg.error('Seleccione un color para su espacio de trabajo');
      }

      if (this.form.value.privacidad == null) {
        this.msg.error('Seleccione la privacidad de su espacio de trabajo');
      }
    } else {
      console.log(this.form.value);
      alert(
        'Logotipo del Espacio de Trabajo: ' +
        this.form.value.logo.name +
        '\n' +
        'Nombre del Espacio de Trabajo: ' +
        this.form.value.nombre_espacio +
        '\n' +
        'Dominio del Espacio de Trabajo: ' +
        this.form.value.url_espacio +
        '\n' +
        'Personas que trabajarán en el Espacio de Trabajo: ' +
        this.form.value.cantidad_personas +
        '\n' +
        'Color del Espacio de Trabajo: ' +
        this.form.value.color +
        '\n' +
        'Privacidad del Espacio de Trabajo: ' +
        this.form.value.privacidad
      );
    }
  }

  resetForm(): void {
    for (let i = 0; i < this.cantidad_personas_array.length; i++) {
      this.cantidad_personas_array[i].value = false;
    }

    for (let i = 0; i < this.privacidad_array.length; i++) {
      this.privacidad_array[i].value = false;
    }

    this.imagePreview = '';

    this.color = '#48b5fe';

    this.form.reset();
  }
}
