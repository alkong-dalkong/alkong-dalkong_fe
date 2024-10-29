import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
  createFamilyGroup,
  editPassword,
  editUserInfo,
  enterFamilyGroup,
  readFamilyGroups,
  readFamilyMembers,
  readUserInfo,
  settingQueryKeys,
} from '@/features'

export const useEditUserInfo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: editUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: settingQueryKeys.userInfo() })
    },
  })
}

export const useReadUserInfo = () =>
  useQuery({
    queryKey: settingQueryKeys.userInfo(),
    queryFn: readUserInfo,
  })

export const useEditPassword = () => {
  return useMutation({
    mutationFn: editPassword,
  })
}

export const useCreateFamilyGroup = () => {
  return useMutation({
    mutationFn: createFamilyGroup,
  })
}

export const useEnterFamilyGroup = (familyCode: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: enterFamilyGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: settingQueryKeys.members(familyCode) })
    },
  })
}

export const useReadFamilyMembers = (familyCode: string) =>
  useQuery({
    queryKey: settingQueryKeys.members(familyCode),
    queryFn: () => readFamilyMembers(familyCode),
    enabled: !!familyCode,
  })

export const useReadFamilyGroups = () =>
  useQuery({
    queryKey: settingQueryKeys.groups(),
    queryFn: readFamilyGroups,
  })
