import { defineStore } from 'pinia';
import axios from 'axios';
import api from '../api/assets';

// 定义数据项的类型
interface Item {
  order: number;
  assetcode: string;
  assetname: string;
  specification: string;
  category:string;
  unit:string
  unitprice:string
  IsRFID:boolean
  RFIDCardId:string
  StorageLocation:string
}

// 定义筛选条件的类型
interface Filter {
 assetcode:string
}

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    items: [] as Item[], // 存储从后端获取的数据
    filter: {
      assetcode:''
    } as Filter,
    isDialogVisible: false,
    selectedRow: null as Filter | null,
    currentView: 'details' as 'details' | 'edit',
  }),

  actions: {
    async fetchData() {
      try {
        const response = await api.getPosts(); // 替换为你的后端接口
        this.items = response.AssetsData;
        console.log(response);
        console.log(this.items);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    },
    setFilter(newFilter: Filter) {
    console.log('Setting filter:', newFilter);
      this.filter = {...newFilter};
      console.log('Updated filter:', this.filter);
    },
    resetFilter() {
        this.filter = {
          assetcode:''
        };
        console.log('Filter reset:', this.filter);
      },
  },

  getters: {
    filteredItems(state) {
      const { assetcode } = state.filter;
      console.log('当前筛选条件:', state.filter);
      return state.items.filter(item => {
        return (
          (assetcode === '' || item.assetcode.includes(assetcode)) 
        //   (age === '' || item.age.includes(age)) &&
        //   (gender === '' || item.gender === gender)
        );
      });
    }
  }
});

export const useDialogStore = defineStore('dialog', {
    state: () => ({
      isDialogVisible: false,
      selectedRow: null as any | null,
      currentView: 'details' as 'details' | 'edit',
    }),
    actions: {
      openDialog(row: any) {
        this.selectedRow = row;
        this.currentView = 'details'; // 默认视图类型
        this.isDialogVisible = true;
        console.log(this.isDialogVisible);
        
      },
      switchView(view: 'details' | 'edit') {
        this.currentView = view;
      },
      closeDialog() {
        this.isDialogVisible = false;
        console.log(this.isDialogVisible);
        
      },
    },
  });
