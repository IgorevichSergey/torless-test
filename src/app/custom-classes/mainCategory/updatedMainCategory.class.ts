interface IUpdatedMainCategory {
  upm_caf_id: number;
  upm_cat_id: number;
  upm_cat_name: string;
  upm_cat_number: number;
}
export class UpdatedMainCategory implements IUpdatedMainCategory {
  constructor(
    public upm_caf_id: number = null,
    public upm_cat_id: number = null,
    public upm_cat_name: string = '',
    public upm_cat_number: number = null
  ) {}
}
