// INTERFACES
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

interface IExtraInfo {
  extra_pr_name: string;
  extra_pr_price: string;
  extra_pr_descr: string;
  double_extra_products: IDoubleExtraProduct[];
}
interface IExtraCategories {
  extra_cat_name: string;
  extra_info: IExtraInfo[];
}
interface ICreatedProduct {
  pr_caf_id: string;
  pr_cat_id: string;
  product: IProduct;
  extra_categories: IExtraCategories[];
}

// CLASSES
export class DoubleExtraProduct implements IDoubleExtraProduct {
  constructor(
    public double_extra_pr_name = '',
    public double_extra_pr_price = ''
  ) {}
}

export class ExtraInfo implements IExtraInfo {
  constructor(
    public extra_pr_name = '',
    public extra_pr_price = '',
    public extra_pr_descr = '',
    public double_extra_products = []
  ) {}
}

export class ExtraCategories implements IExtraCategories {
  constructor(
   public extra_cat_name: string = '',
   public extra_info: IExtraInfo[] = [],
  ) {}
}

export class CreatedProduct implements ICreatedProduct {
  constructor(
    public pr_caf_id: string = '',
    public pr_cat_id: string = '',
    public product: IProduct = {
      pr_name: '',
      pr_price: '',
      pr_cook_time: '',
      pr_descr: ''
    },
    public extra_categories: IExtraCategories[] = []
  ) {}
}
