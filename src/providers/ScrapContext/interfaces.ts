export interface IScrap {
  readonly id: number;
  author?: string;
  email?: string;
  content?: string;
  userId?: number;
}

export type TScrapCreateForm = Omit<IScrap, "id">;

export type TScrapUpdateForm = Omit<IScrap, "userId">;

export type TScrapProviderValues = {
  scrapList: IScrap[];
  editScrap: TScrapUpdateForm | null;
  scrapCreate: (payload: TScrapCreateForm) => Promise<void>;
  deleteScrap: (scrapId: number) => Promise<void>;
  selectScrapToEdit: (scrap: TScrapUpdateForm) => void;
  updateScrap: (scrap: TScrapUpdateForm) => void;
  //scrapUpdate: (payload: ScrapUpdateForm) => Promise<void>;
  //scrapEdit: (scrap: TScrapUpdateForm) => Promise<void>;
};
