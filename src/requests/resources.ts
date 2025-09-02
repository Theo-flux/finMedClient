import { MISC } from '@/constants/api';
import { EnumResourceType } from '@/constants/mangle';
import { TResourceModalSchema } from '@/features/settings/misc/components/modals/ResourceModal';
import finMedServer from '@/servers/finMed';

const getResourceUrl = (type: EnumResourceType): string => {
  switch (type) {
    case EnumResourceType.ROLE:
      return MISC.ROLE;
    case EnumResourceType.DEPT:
      return MISC.DEPT;
    case EnumResourceType.SERVICE:
      return MISC.SERVICE;
    case EnumResourceType.CATEGORY:
      return MISC.CATEGORY;
    default:
      throw new Error(`Unsupported resource type: ${type}`);
  }
};

export const postResource = ({
  type,
  payload
}: {
  type: EnumResourceType;
  payload: Omit<TResourceModalSchema, 'status'>;
}) => {
  const url = getResourceUrl(type);
  return finMedServer.post<IFinMedServerRes<TLoginRes>>(url, payload);
};

export const patchResource = ({
  uid,
  type,
  payload
}: {
  uid: string;
  type: EnumResourceType;
  payload: Omit<TResourceModalSchema, 'status'>;
}) => {
  const url = getResourceUrl(type);
  return finMedServer.patch<IFinMedServerRes<TLoginRes>>(`${url}/${uid}`, payload);
};
