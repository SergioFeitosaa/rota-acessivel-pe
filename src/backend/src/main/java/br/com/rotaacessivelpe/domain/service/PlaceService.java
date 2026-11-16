package br.com.rotaacessivelpe.domain.service;

import br.com.rotaacessivelpe.api.dto.AccessibilityInfoDTO;
import br.com.rotaacessivelpe.api.dto.PlaceDetailDTO;
import br.com.rotaacessivelpe.api.dto.PlaceSummaryDTO;
import br.com.rotaacessivelpe.domain.model.Place;
import br.com.rotaacessivelpe.domain.repository.PlaceRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlaceService {

    private final PlaceRepository placeRepository;

    public PlaceService(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    @Transactional(readOnly = true)
    public List<PlaceSummaryDTO> findAll() {
        return placeRepository.findAll().stream()
                .map(this::toSummaryDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public PlaceDetailDTO findById(Long id) {
        Place place = placeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Place not found"));
        return toDetailDTO(place);
    }

    private PlaceSummaryDTO toSummaryDTO(Place place) {
        PlaceSummaryDTO dto = new PlaceSummaryDTO();
        dto.setId(place.getId());
        dto.setName(place.getName());
        dto.setDescription(place.getDescription());
        dto.setImageUrl(place.getImageUrl());
        dto.setDifficulty(place.getDifficulty());
        dto.setDistanceKm(place.getDistanceKm());
        dto.setDurationMinutes(place.getDurationMinutes());
        
        List<String> tags = place.getAccessibilityInfos().stream()
                .map(info -> info.getFeature().getName())
                .distinct()
                .collect(Collectors.toList());
        dto.setTags(tags);
        return dto;
    }

    private PlaceDetailDTO toDetailDTO(Place place) {
        PlaceDetailDTO dto = new PlaceDetailDTO();
        dto.setId(place.getId());
        dto.setName(place.getName());
        dto.setDescription(place.getDescription());
        dto.setImageUrl(place.getImageUrl());
        dto.setDifficulty(place.getDifficulty());
        dto.setDistanceKm(place.getDistanceKm());
        dto.setDurationMinutes(place.getDurationMinutes());
        dto.setAddress(place.getAddress());
        dto.setLatitude(place.getLatitude());
        dto.setLongitude(place.getLongitude());

        List<String> tags = place.getAccessibilityInfos().stream()
                .map(info -> info.getFeature().getName())
                .distinct()
                .collect(Collectors.toList());
        dto.setTags(tags);

        List<AccessibilityInfoDTO> infos = place.getAccessibilityInfos().stream().map(info -> {
            AccessibilityInfoDTO infoDTO = new AccessibilityInfoDTO();
            infoDTO.setFeatureName(info.getFeature().getName());
            infoDTO.setFeatureIcon(info.getFeature().getIcon());
            infoDTO.setStatus(info.getStatus());
            infoDTO.setSource(info.getSource());
            infoDTO.setDateVerified(info.getDateVerified());
            infoDTO.setComments(info.getComments());
            return infoDTO;
        }).collect(Collectors.toList());
        dto.setAccessibilityInfos(infos);

        return dto;
    }
}
