using AutoMapper;
using System;
using System.Linq;
using ZwajApp.Api.DTOs;
using ZwajApp.Api.Models;

namespace ZwajApp.Api.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserListDto>()
                .ForMember(dest => dest.PhotoUrl, opt => { opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url); })
                .ForMember(dest => dest.age, opt => { opt.MapFrom(src => src.DateOfBirth.CalculateAge()); });

            CreateMap<User, UserDetailsDto>()
                .ForMember(dest => dest.PhotoUrl, opt => { opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url); })
                .ForMember(dest => dest.Age, opt => { opt.MapFrom(src => src.DateOfBirth.CalculateAge()); });

            CreateMap<Photo, PhotoDetailsDto>();
            CreateMap<UserEditDto, User>();
        }
    }
}
