interface IWorkTime {
  day_number: number;
  time_start: string;
  time_end: string;
}
interface ICafeteria {
  caf_type: number;
  caf_name: string;
  caf_university_id: number;
  caf_university_building_id: number;
  caf_kosher_type: number;
  caf_veg_type: number;
  caf_address: string;
  caf_description: string;
}
interface ICreatedCafeteria {
  cafeteria: ICafeteria;
  work_time: IWorkTime[];
}
// todo: work time
export class CreatedCafeteria implements ICreatedCafeteria {
  constructor(
    public cafeteria: ICafeteria = {
      caf_type: null,
      caf_name: '',
      caf_university_id: null,
      caf_university_building_id: null,
      caf_kosher_type: null,
      caf_veg_type: null,
      caf_address: '',
      caf_description: ''
    },
    public work_time: IWorkTime[] = []
  ) {}
}
