interface IProduct {
  pr_name: string;
  pr_price: string;
  pr_cook_time: string;
  pr_descr: string;
}
interface IDoubleExtraProduct {
  double_extra_pr_name: string;
  double_extra_pr_price: string;
}
interface IExtraCategory {
  extra_cat_name: string;
  extra_pr_name: string;
  extra_pr_price: string;
  extra_pr_descr: string;
  double_extra_products: IDoubleExtraProduct[];
}
interface ICreatedMainProduct {
  pr_caf_id: number;
  pr_cat_id: number;
  product: IProduct;
  extra_categories: IExtraCategory[];
}
export class CreatedMainProduct implements ICreatedMainProduct {
  constructor(
    public pr_caf_id = null,
    public pr_cat_id = null,
    public product = {
      pr_name: '',
      pr_price: '',
      pr_cook_time: '',
      pr_descr: '',
    },
    public extra_categories = []
  ) {}
}
