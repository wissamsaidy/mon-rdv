package sopra.monRdv.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import sopra.monRdv.model.Motif;
import sopra.monRdv.repository.IMotifRepository;

@RestController
@RequestMapping("/motif")
@CrossOrigin("*")
public class MotifRestController {

	@Autowired
	private IMotifRepository motifRepo;

	@GetMapping("")
	public List<Motif> findAll() {
		return motifRepo.findAll();
	}

	@GetMapping("/{id}")
	public Motif find(@PathVariable Long id) {

		Optional<Motif> optMotif = motifRepo.findById(id);

		if (optMotif.isPresent()) {
			return optMotif.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	public Motif create(@RequestBody Motif motif) {
		motif = motifRepo.save(motif);

		return motif;
	}

	@PutMapping("/{id}")
	public Motif update(@RequestBody Motif motif, @PathVariable Long id) {
		if (!motifRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		motif = motifRepo.save(motif);

		return motif;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!motifRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		motifRepo.deleteById(id);
	}
}
