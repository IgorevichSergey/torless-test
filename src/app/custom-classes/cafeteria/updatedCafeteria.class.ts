interface IUpdatedWorkTime {
  up_day_number: number;
  up_time_start: string;
  up_time_end: string;
}
interface IUpdatedCafeteria {
  up_caf_id: number;
  up_caf_type: number;
  up_caf_name: string;
  up_caf_university_id: number;
  up_caf_university_building_id: number;
  up_caf_kosher_type: number;
  up_caf_veg_type: number;
  up_caf_address: string;
  up_caf_description: string;
}

export class UpdatedCafeteria {
  constructor (
    public cafeteria: IUpdatedCafeteria = {
      up_caf_id: null,
      up_caf_type: null,
      up_caf_name: '',
      up_caf_university_id: null,
      up_caf_university_building_id: null,
      up_caf_kosher_type: null,
      up_caf_veg_type: null,
      up_caf_address: '',
      up_caf_description: ''
    },
    public work_time: IUpdatedWorkTime[] = []
  ) {}
}
