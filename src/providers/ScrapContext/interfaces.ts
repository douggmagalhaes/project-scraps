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
  editScrap: IScrap | null;
  viewScrap: IScrap | null;
  scrapCreate: (payload: TScrapCreateForm) => Promise<void>;
  deleteScrap: (scrapId: number) => Promise<void>;
  selectScrapToEdit: (scrap: IScrap) => void;
  selectScrapToView: (scrap: IScrap) => void;
  updateScrap: (scrap: IScrap) => void;
};
