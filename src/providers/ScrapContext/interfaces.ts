export interface Scrap {
  readonly id: number;
  author?: string;
  email?: string;
  content?: string;
  userId?: number;
}

export type ScrapCreateForm = Omit<Scrap, "id">;

export type ScrapUpdateForm = Omit<Scrap, "id" | "userId">;

export type ScrapProviderValues = {
  scrapList: Scrap[];
  scrapCreate: (payload: ScrapCreateForm) => Promise<void>;
  //scrapUpdate: (payload: ScrapUpdateForm) => Promise<void>;
};
