interface ICreatedMainCategory {
  ct_caf_id: number;
  ct_name: string;
}
export class CreatedMainCategoryClass implements ICreatedMainCategory {
  constructor(
    public ct_caf_id: number = null,
    public ct_name: string = ''
  ) {}
}
