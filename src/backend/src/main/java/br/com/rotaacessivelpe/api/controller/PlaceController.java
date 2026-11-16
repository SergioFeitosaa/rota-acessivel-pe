package br.com.rotaacessivelpe.api.controller;

import br.com.rotaacessivelpe.api.dto.PlaceDetailDTO;
import br.com.rotaacessivelpe.api.dto.PlaceSummaryDTO;
import br.com.rotaacessivelpe.domain.service.PlaceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/places")
@CrossOrigin(origins = "*")
public class PlaceController {

    private final PlaceService placeService;

    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @GetMapping
    public ResponseEntity<List<PlaceSummaryDTO>> findAll() {
        return ResponseEntity.ok(placeService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlaceDetailDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(placeService.findById(id));
    }
}
