import { IDataType } from '@/service/login/type'
import hyRequest from '../../index'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
