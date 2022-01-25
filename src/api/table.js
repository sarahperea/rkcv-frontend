import requests, {TABLE_URL} from "@/utils/requests"

export const getTableData = (params) => {
    console.log('return table data')
    return requests({
        url: `${TABLE_URL}`,
        method: 'get',
        params: params
    });
  }
  